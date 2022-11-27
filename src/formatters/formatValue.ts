export function formatValue(value: number): string {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BRL",
  });

  return formatter.format(value);
}
