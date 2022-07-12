// 4. sukurti enum appState kuris turi Loading, Error, Online. Parasyti funkcija kuri atspaustina htmle kortele "Loading...", "Ivyko klaida!!!" "Serbentaudas Bordiuras pasiruoses" priklausomai nuo state kuri gavo.

enum AppState {
  Loading = 'loading',
  Error = 'error',
  Online = 'online',
}
