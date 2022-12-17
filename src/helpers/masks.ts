const maskCep = (value: string) =>
  value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')

export { maskCep }
