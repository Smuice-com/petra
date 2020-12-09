module.exports = {
  variants: {
      accessibility: ['responsive', 'focus'],
      borderRadius: ['responsive', 'ltr', 'rtl'],
      borderWidth: ['responsive', 'ltr', 'rtl'],
      inset: ['responsive', 'ltr', 'rtl'],
      padding: ['responsive', 'ltr', 'rtl'],
      float: ['responsive', 'rtl'],
      margin: ['responsive', 'rtl'],
      textAlign: ['responsive', 'rtl'],
      transform: ['responsive', 'rtl'],
      rotate: ['responsive', 'rtl'],
      fontFamily: ['responsive', 'rtl'],
      fontStyle: ['responsive', 'rtl'],
      letterSpacing: ['responsive', 'rtl'],
      space: ['responsive', 'rtl', 'direction'],
  },
  plugins: [
    require("tailwindcss-dir")(),
    function ({addVariant, e}) {
      addVariant('ltr', ({separator, modifySelectors}) => {
        modifySelectors(({className}) => {
          return `[dir=ltr] .ltr${e(separator)}${className}`;
        })
      });

      addVariant('rtl', ({separator, modifySelectors}) => {
        modifySelectors(({className}) => {
          return `[dir=rtl] .rtl${e(separator)}${className}`;
        })
      });
    }
  ]
}