
module.exports = {
    "presets": [
        "@babel/preset-env",
    ],
    "plugins": [
        [
            'module-resolver',
            {
                "root": [
                    './'
                ],
                "alias": {
                    "components": "./src/core/components",
                    "helpers": "./src/core/utils/helpers"
                }
            }
        ]
    ]
}