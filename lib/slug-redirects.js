// Single source of truth for English slugs that used to equal the Portuguese slug.
// Shape: { '<old slug (= Portuguese slug)>': '<current English slug>' }
//
// next.config.js turns every entry into direct 301 redirects:
//   /en/issues/<old>   -> /en/issues/<new>
//   /en/ensaios/<old>  -> /en/issues/<new>
//
// Rule: whenever a PUBLISHED slug changes (either language), add the old -> new entry here
// in the same change. Never rename a published slug without it. New essays never need an entry.
// lib/ensaios.ts fails the build if a "new" slug listed here has no matching English file.
module.exports = {
  'varios-negocios-quase-sozinho': 'i-disappeared-for-months',
  'verba-de-guerra': 'war-chest',
  'olhe-pra-tras': 'look-back',
  'objetivo-sim-ou-nao': 'goal-yes-or-no',
  'por-que-todo-dev-usa-mac': 'why-every-dev-uses-a-mac',
  'o-poder-do-grupo': 'the-power-of-the-group',
  'comecar-a-vender-seu-saas': 'starting-to-sell-your-saas',
  'por-que-o-salario-em-ti-e-baixo': 'why-tech-salaries-are-low',
  'experimente-ser-novato': 'try-being-a-beginner',
  'o-musculo-de-dissecar-problemas': 'the-muscle-of-dissecting-problems',
  'dois-sentidos-de-inaceitavel': 'two-meanings-of-unacceptable',
  'o-preco-do-dominio-e-a-renovacao': 'domain-price-is-the-renewal',
  'o-limite-e-o-quanto-voce-pergunta': 'the-limit-is-how-much-you-ask',
  'quando-o-codigo-deixa-de-ser-o-gargalo': 'when-code-stops-being-the-bottleneck',
}
