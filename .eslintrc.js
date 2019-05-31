module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "jest": true,
    },
    "rules": {
        "no-use-before-define": "off",
        "react/jsx-filename-extension": "off",
        "react/prop-types": "off",
        "comma-dangle": "off",
        "object-curly-newline": "off",
        "react/prefer-stateless-function": "off",
        "max-len": 120,
        "no-underscore-dangle": "off"
    },
    "globals": {
        "fetch": false
    }
}