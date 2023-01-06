class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name,
        this.releaseDate = releaseDate,
        this.pagesCount = pagesCount,
        this.type = null,
        this.state = 100;
    }   

    fix() {
        this.state *= 1.5;
    }
    
    set state(stateAfterFix) {
        if (stateAfterFix > 100) {
            this._state = 100;
        } else if (stateAfterFix < 0) {
            this._state = 0;
        } else {
            this._state = stateAfterFix;
        }
    }

    get state() {
        return this._state;
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );