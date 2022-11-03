export function removeEmptyProperties(obj: any | null) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}

export function formatNumberMoney(value: number) {
  return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}