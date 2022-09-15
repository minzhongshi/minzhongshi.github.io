let MagicGrid = require("magic-grid");
const magicGrid = new MagicGrid({
    container: '.container',
    animate: true,
    gutter: 30,
    static: true,
    useMin: true
});

magicGrid.listen();
