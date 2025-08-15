// utils/dateHelpers.ts
export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Fecha inválida"; // control de errores

  const now = new Date();
  const diff = now.getTime() - date.getTime(); // diferencia en ms

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 1) return "Justo ahora";
  if (minutes < 60) return `Hace ${minutes} minuto${minutes > 1 ? "s" : ""}`;
  if (hours < 24) return `Hace ${hours} hora${hours > 1 ? "s" : ""}`;
  if (days === 1) return "Ayer";
  if (days < 7) return `Hace ${days} día${days > 1 ? "s" : ""}`;

  // Para fechas más antiguas, mostrar en formato dd/mm/yyyy
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
}
