import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import { validatePriceInput } from "../utils/vaildateInput.js";

class Model {
  makeLotto(priceInput) {
    const price = validatePriceInput(priceInput);
    const lotties = [];

    while (lotties.length < price) {
      const lottoRandomNum = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      const lotto = new Lotto(lottoRandomNum);
      lotties.push(lotto);
    }

    return lotties;
  }

  compareWinLotto(winNumInput, winBonusInput) {}
}

export default Model;
