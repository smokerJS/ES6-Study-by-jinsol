/*
    Introduction
    (test01.js에는 코드가 없이 설명만 있습니다.)

일반적으로 모듈은 파일 단위로 분리되어 있으며 어플리케이션은 필요에 따라 명시적으로 모듈을 로드하여 재사용한다.
즉, 모듈은 어플리케이션과 분리되어 개별적으로 존재하다 로드에 의해 비로소 어플리케이션의 일원이 된다.

자바스크립트는 웹페이지의 보조적인 기능을 수행하기 위해 한정적인 용도로 만들어진
태생적 한계로 다른 언어에 비해 부족한 부분이 있다.
그 대표적인 것이 모듈 기능이 없는 것이다.

C언어는 #include / Java는 import 등 대부분의 언어는 모듈 기능을 가지고 있다.
하지만 클라이언트 사이드 자바스크립트는 
script 태그를 사용하여 외부의 스크립트 파일을 가져올 수는 있지만,
파일마다 독립적인 파일 스코프를 갖지 않고 하나의 전역 객체에 바인딩 되기 때문에
전역 변수가 중복되는 등의 문제가 발생할 수 있다.
이것으로는 모듈화를 구현할 수 없다.

자바스크립트를 클라이언트 사이드에 국한하지 않고 범용적으로 사용하고자 하는 움직임이 생기면서
모듈 기능은 반드시 해결해야 하는 핵심 과제가 되었고 이런 상황에서 제안된 것이 CommonJS와 AMD(Asynchronous Module Definition)이다.

결국, 자바스크립트의 모듈화은 크게 CommonJS 진영과 AMD 진영으로 나뉘게 되었고
브라우저에서 모듈을 사용하기 위해서는 CommonJS 또는 AMD를 구현한 모듈 로더 라이브러리를 사용해야 하는 상황이 되었다.

서버 사이드 자바스크립트인 Node.js는 사실상 모듈 시스템의 사실상 표준(de facto standard)인 CommonJS를 채택하였고
현재는 독자적인 진화를 거쳐 CommonJS 사양과 100% 동일하지는 않지만 기본적으로 CommonJS 방식을 따르고 있다.

이러한 상황에서 ES6에서는 클라이언트 사이드 자바스크립트에서도 동작하는 모듈 기능을 추가하였다.
단, 현재 대부분의 브라우저가 ES6의 모듈을 지원하지 않고 있으므로 현재의 브라우저에서 ES6 모듈을 사용하려면
SystemJS, RequireJS 등의 모듈 로더 또는 Webpack 등의 모듈 번들러를 사용하여야 한다.

ES6 모듈은 단 두 개의 키워드 export와 import를 제공한다.
*/

// node의 npm install, require 와 비슷하나, ES6에서 추가된 기능입니다.