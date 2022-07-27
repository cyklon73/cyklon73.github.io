package de.cyklon.gds.DAapi.token;

public enum CharSet {

    a('a', 0),
    b('b', 1),
    c('c', 2),
    d('d', 3),
    e('e', 4),
    f('f', 5),
    g('g', 6),
    h('h', 7),
    i('i', 8),
    j('j', 9),
    k('k', 10),
    l('l', 11),
    m('m', 12),
    n('n', 13),
    o('o', 14),
    p('p', 15),
    q('q', 16),
    r('r', 17),
    s('s', 18),
    t('t', 19),
    u('u', 20),
    v('v', 21),
    w('w', 22),
    x('x', 23),
    y('y', 24),
    z('z', 25),

    A('A', 26),
    B('B', 27),
    C('C', 28),
    D('D', 29),
    E('E', 30),
    F('F', 31),
    G('G', 32),
    H('H', 33),
    I('I', 34),
    J('J', 35),
    K('K', 36),
    L('L', 37),
    M('M', 38),
    N('N', 39),
    O('O', 40),
    P('P', 41),
    Q('Q', 42),
    R('R', 43),
    S('S', 44),
    T('T', 45),
    U('U', 46),
    V('V', 47),
    W('W', 48),
    X('X', 49),
    Y('Y', 50),
    Z('Z', 51),

    ZERO('0', 52),
    ONE('1', 53),
    TWO('2', 54),
    THREE('3', 55),
    FOUR('4', 56),
    FIVE('5', 57),
    SIX('6', 58),
    SEVEN('7', 59),
    EIGHT('8', 60),
    NINE('9', 61),

    EXCLAMATION_MARK('!', 62),
    QUESTION_MARK('?', 63),
    DOT('.', 64);

    private final char character;
    private final int id;

    CharSet(char c, int id) {
        this.character = c;
        this.id = id;
    }

    public char getChar() {
        return character;
    }

    public int getId() {
        return id;
    }

    public static int getMaxId() {
        return values().length - 1;
    }

    public static CharSet get(int id) {
        for (CharSet ch: values()) {
            if (ch.id == id) return ch;
        }
        return null;
    }
}
