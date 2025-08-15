import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "@uidotdev/usehooks";

import {
  ButtonWrapper,
  Container,
  InputWrapper,
  NewPhraseWrapper,
  PhrasesWrapper,
  Separator,
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
import { TYPE } from "../../components/Button/types";

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
          value="Phrases manager"
          fontSize={FONT_SIZE.TEXT_2XL}
          fontWeight={FONT_WEIGHT.FONT_BOLD}
        />
        <Text
          value="Create, view, and manage your favorite phrases in one place. Search through your collection instantly and keep your most inspiring thoughts always at hand"
          fontSize={FONT_SIZE.TEXT_SM}
        />
      </TitleWrapper>
      <Separator />
      <NewPhraseWrapper>
        <InputWrapper>
          <InputText
            value={search}
            width="20rem"
            placeholder="Write your phrase here..."
            onChange={handleSearchChange}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button
            title="Add phrase"
            onClick={handleCreatePhrasePopupOpen}
            type={TYPE.PRIMARY}
          />
        </ButtonWrapper>
      </NewPhraseWrapper>

      <PhrasesWrapper>
        {displayEmptyState && <Text value="No phrases found" />}

        {displaySkeletons &&
          PHRASES_PER_PAGE.map((_, index) => <SkeletonPhrase key={index} />)}

        {displayPhrases &&
          phrases.map((phrase) => (
            <Phrase
              key={phrase.id}
              text={phrase.text}
              createdAt={phrase.createdAt}
            />
          ))}
      </PhrasesWrapper>
      <CreatePhrasePopup />
    </Container>
  );
}
