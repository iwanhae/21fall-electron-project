## 21fall-electron-project

### 차후 계획
* production 환경은 7 ~ 8주차에 컨피그 작성하면 될듯?
* 현재 개발환경 키면 electron 보안 관련해서 warning이 뜰텐데 react-hot-loader 때문에 그렇습니다. production 환경에서 핫로더 사용할 일은 없으니 산출 바이너리에서 문제 생길일은 없어용.

### 개발하는 방법 ~~
* **!! 윈도우 환경에서 문제있으면 알려주세요. !!**
* react-hot-loader가 적용되어있으므로 새로고침 안해도 웹팩에서 알아서 변경사항만 캐치해서 적용해줍니다.
1. `npm run dev` : ./src/App.tsx를 컴파일합니다. http://localhost:3000에서 접속가능합니다.
    * 이거만 입력하고 chrome web 상에서 개발해도 될거같긴 해요. 다만 electron에서 제공하는 메소드까지 잘 작동할지는 모르겠네욤.
2. `npm run dev:main`: ./src/main/index.ts (electron-main 프로세스)를 컴파일합니다. ./dist/index.js로 컴파일됩니다.
    * Electron 상에서 띄우고 개발하고 싶으시면 이거까지 실행하시면 됩니다.

### 커밋하기 전에 ~~

* 일관성있는 코드를 위해 eslint --fix를 꼭 돌립시다. 3가지 선택지가 있습니다.
* `eslint --fix on save` 저장할때마다 자동정렬해주는방법!
  * `Intellij`
    * preference -> eslint -> Automatic eslint config, Run eslint --fix on save 설정을 해주세요.
    
* husky + lintstaged를 활용해서 커밋하기전에 eslint --fix를 실행해주기
  1. `git add .`
  2. `git commit -m '작성하고 싶은 커밋메세지'`
  3. 커밋하려는 파일들에 대해서 lint를 돌려줄겁니다. 에러가 있으면 커밋을 막는 구조라서 type관련 메세지는 해결을 하고 커밋하는걸 추천하구요. ts-ignore는 엔간해서는 안쓰시는게 좋습니다 
  4. 에러가 없으면 lint로 정렬해준채로 commit를 해줍니다.

* `npm run lint` 돌리기
  * 앞서 말했던 방식들을 사용하는데 문제가 있으면 파일 작성이 끝나고 해당 스크립트를 돌리시면 됩니다.
