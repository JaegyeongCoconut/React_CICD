const babelConfig = {
  plugins: [
    [
      "@emotion/babel-plugin",
      {
        autoLabel: "dev-only",
        labelFormat: "[filename]-[local]",
      },
    ],
    [
      "@emotion/babel-plugin-jsx-pragmatic",
      {
        export: "jsx",
        import: "__to_avoid_prepending_/** @jsxImportSource @emotion/react */",
        module: "@emotion/react",
      },
    ],
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "__to_avoid_prepending_/** @jsxImportSource @emotion/react */",
      },
    ],
  ],
};

export default babelConfig;
