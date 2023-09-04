# Getting Started

## Prerequisites

## Client usage

1. Tạo file .npmrc trong project

```
@sapo-presentation:registry=https://git.dktsoft.com:2008/api/v4/projects/2357/packages/npm/
//git.dktsoft.com:2008/api/v4/projects/2357/packages/npm/:_authToken=glpat-MT8Kb66sgdaYFSvPsXna
//git.dktsoft.com:2008/api/v4/packages/npm/:_authToken=glpat-MT8Kb66sgdaYFSvPsXna
```

2. Chạy npm install(/yarn add) @sapo-presentation/sapo-ui-components và các peerDependencies trong package.json


3. Thêm một UIComponentProvider vào cấp cao nhất của ứng dụng của bạn.

```tsx
import { UIComponentProvider } from '@sapo-presentation/sapo-ui-components';

return (
  <UIComponentProvider>
    <App />
  </UIComponentProvider>
);
```
### Một số lưu ý
Đánh version: https://viblo.asia/p/semantic-versioning-OeVKBN2EKkW