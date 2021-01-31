import React from 'react';

import Analyzer, { Options } from 'parser/core/Analyzer';
import Enemies from 'parser/shared/modules/Enemies';

import SPELLS from 'common/SPELLS';
import { ThresholdStyle, When } from 'parser/core/ParseResults';
import SUGGESTION_IMPORTANCE from 'parser/core/ISSUE_IMPORTANCE';

class StellarFlare extends Analyzer {
  static dependencies = {
    enemies: Enemies,
  };

  protected enemies!: Enemies;

  constructor(options: Options) {
    super(options);
    this.active = this.selectedCombatant.hasTalent(SPELLS.STELLAR_FLARE_TALENT.id);

    console.log(this.enemies);
  }

  get showSuggestion() {
    return {
      actual: true,
      isEqual: true,
      style: ThresholdStyle.BOOLEAN,
    };
  }

  suggestions(when: When) {
    when(this.showSuggestion)
      .addSuggestion((suggest) => suggest(<span>TRESIAGNERTAERWTR</span>)
        .icon(SPELLS.BARKSKIN.icon)
        .staticImportance(SUGGESTION_IMPORTANCE.MAJOR));
  }
}

export default StellarFlare;
