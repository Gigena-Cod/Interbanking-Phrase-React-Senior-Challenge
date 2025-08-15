import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "@uidotdev/usehooks";

import {
  ButtonWrapper,
  Container,
  InputWrapper,
  NewPhraseWrapper,
  PhrasesWrapper,
  TitleWrapper,
} from "./Styled";
import { Text, Button } from "../../components";
import { FONT_SIZE, FONT_WEIGHT } from "../../components/Text/types";
import { useGetPhrases } from "../../hooks";
import { CreatePhrasePopup } from "./components/CreatePhrasePopup/CreatePhrasePopup";
import { SkeletonPhrase } from "./components/SkeletonPhrase/SkeletonPhrase";
import { InputText } from "../../components/InputText/InputText";
import { Phrase } from "./components/Phrase/Phrase";
import { setCreatePhrasePopupOpen, setPhrases } from "../../redux/Phrases";
import { useSelector } from "react-redux";
import { getPhrases } from "../../redux/Phrases/actions";

const MINIMUM_PHRASES = 0;

const PHRASES_PER_PAGE = Array.from({ length: 10 });

export function ViewPhrases() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  const phrases = useSelector(getPhrases);

  const dispatch = useDispatch();

  const getPhrasesHook = useGetPhrases();

  const handleCreatePhrasePopupOpen = () => {
    dispatch(setCreatePhrasePopupOpen(true));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const displayPhrases = useMemo(
    () =>
      !getPhrasesHook.loading && !getPhrasesHook.error && getPhrasesHook.data,
    [getPhrasesHook.loading, getPhrasesHook.error, getPhrasesHook.data]
  );

  const displayEmptyState = useMemo(
    () =>
      !getPhrasesHook.loading &&
      !getPhrasesHook.error &&
      getPhrasesHook.data &&
      getPhrasesHook.data?.data.length === MINIMUM_PHRASES,
    [getPhrasesHook.loading, getPhrasesHook.error, getPhrasesHook.data]
  );

  const displaySkeletons = useMemo(
    () => getPhrasesHook.loading && !getPhrasesHook.error,
    [getPhrasesHook.loading, getPhrasesHook.error]
  );

  useEffect(() => {
    getPhrasesHook.get({ search: debouncedSearch });
  }, [debouncedSearch]);

  useEffect(() => {
    if (!getPhrasesHook.data) return;

    dispatch(setPhrases(getPhrasesHook.data.data));
  }, [getPhrasesHook.data]);

  useEffect(() => {
    if (!getPhrasesHook.error) return;

    console.log(getPhrasesHook.error);
  }, [getPhrasesHook.error]);

  return (
    <Container>
      <TitleWrapper>
        <Text
          value="ViewPhrases"
          fontSize={FONT_SIZE.TEXT_2XL}
          fontWeight={FONT_WEIGHT.FONT_BOLD}
        />
        <Text
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          fontSize={FONT_SIZE.TEXT_SM}
        />
      </TitleWrapper>
      <NewPhraseWrapper>
        <InputWrapper>
          <InputText
            value={search}
            placeholder="Write your phrase here..."
            onChange={handleSearchChange}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button title="Add phrase" onClick={handleCreatePhrasePopupOpen} />
        </ButtonWrapper>
      </NewPhraseWrapper>

      <PhrasesWrapper>
        {displayEmptyState && <Text value="No phrases found" />}

        {displaySkeletons &&
          PHRASES_PER_PAGE.map((_, index) => <SkeletonPhrase key={index} />)}

        {displayPhrases &&
          phrases.map((phrase) => (
            <Phrase key={phrase.id} text={phrase.text} />
          ))}
      </PhrasesWrapper>
      <CreatePhrasePopup />
    </Container>
  );
}
