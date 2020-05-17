---
date: 2020-04-20 19:00:00
title: markdownテスト2
description: markdownテストのディスクリプション2
---

# h1
## h2
## h3

**strong-text**

*em-text*

~~del-text~~

- list1
- list2
- list3

[トップへ](/)

- 画像
![画像](https://miro.medium.com/max/4256/1*tsOxXGb20o2zrCh6Sp5PYQ.png)

## Table
| TH1 | TH2 |
----|---- 
| TD1 | TD3 |
| TD2 | TD4 |

| 左揃え | 中央揃え | 右揃え |
|:---|:---:|---:|
|1 |2 |3 |
|4 |5 |6 |


## Syntax highlight

- highlight-line

```js
module.exports = {
  plugins: [
    "highlight-line", // highlight-line
    "hogehoge"
  ]
};
```

- language-*

```jsx:title=.jsx
import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
```
