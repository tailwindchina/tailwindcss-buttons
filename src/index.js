const plugin = require('tailwindcss/plugin')

const pluginButtons = plugin(({ addComponents, theme }) => {
    const buttonDefault = theme('buttonDefault')

    addComponents({
        '.btn': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: theme('buttonDefault.height', '2.5rem'),
            paddingLeft: theme('buttonDefault.paddingLeft', '1.5rem'),
            paddingRight: theme('buttonDefault.paddingRight', '1.5rem'),
            fontSize: theme('buttonDefault.fontSize', '1rem'),
            color: theme('buttonDefault.color', theme('colors.white')),
            borderRadius: theme('buttonDefault.borderRadius', theme('borderRadius.DEFAULT')),
            transition: theme('buttonDefault.transition', 'all 150ms ease-in-out'),
            '&:focus': {
                outline: 'none',
            }
        }
    })

    const colors = theme('buttonColors')

    colors.forEach(color => {
        if (theme(`colors.${color}.500`)){
            addComponents({
                [`.btn-${color}`]: {
                    backgroundColor: theme(`colors.${color}.500`),
                    '&:hover': {
                        backgroundColor: theme(`colors.${color}.400`),
                    },
                    '&:active': {
                        backgroundColor: theme(`colors.${color}.600`),
                    }
                }
            })
        }
    })

    const sizes = theme('buttonSizes')

    Object.keys(sizes).forEach(size => {
        addComponents({
            [`.btn-${size}`]: {
                height: sizes[size][0],
                paddingLeft: sizes[size][1],
                paddingRight: sizes[size][1],
                fontSize: sizes[2],
            }
        })
    })
}, {
    theme: {
        buttonColors: ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'],
        buttonSizes: {
            xs: ['1.5rem', '0.5rem', '12px'],
            sm: ['2rem', '1rem', '14px'],
            lg: ['3rem', '2rem', '18px'],
            xl: ['3.5rem', '2.5rem', '20px'],
        },
        buttonDefault: {
            height: '2.5rem',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
            fontSize: '1rem',
            color: '#ffffff',
            borderRadius: '.25rem',
            transition: 'all 150ms ease-in-out',
        },
    }
})

module.exports = pluginButtons
