export function cn(
  ...classes: (string | undefined | null | boolean)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export const formatPrice = (price: number | null): string => {
  if (price === null) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const getInitials = (name: string): string => {
  const nameParts = name.split(" ");
  if (nameParts.length === 1) {
    return nameParts[0][0].toUpperCase();
  }
  return (
    nameParts[0][0].toUpperCase() +
    nameParts[nameParts.length - 1][0].toUpperCase()
  );
};
