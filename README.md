[**프로젝트 링크**](https://happyuniv-momentum.netlify.app) 

# MOMENTUM
[크롬 확장 앱 MOMENTUM](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=ko)
을 바닐라 자바스크립트를 통해 나만의 방식으로 클론 구현한 웹사이트

## Feature
* 현재 위치정보를 기반으로 현재날씨, 현재온도, 최고/최저 온도, 지역 제공
* 할일 목록 추가/제거
* 현재 시간
* 구글 검색
* 인용구 

## Tool
* 바닐라 자바스크립트
* [unsplash api](https://unsplash.com/documentation#get-a-random-photo)
* [openweathermap api](https://openweathermap.org/api) 

## Deploy
* NETLIFY [![Netlify Status](https://api.netlify.com/api/v1/badges/a1c51ec5-b037-42b3-8317-35ccc54be2c8/deploy-status)](https://app.netlify.com/sites/happyuniv-momentum/deploys)   

---

### Review
* 로컬 스토리지를 통한 이미지 캐싱
```
  const now = new Date();
  let baseURL =
    "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MDI0M3wwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDY0Nzg4Mg&ixlib=rb-1.2.1&q=85";

  const loadBackground = async () => {
    try {
      const data = await api.fetchBackground();

      const url = data.urls.full;
      const expire = now.setDate(now.getDate() + 1);
      localStorage.setItem(
        "background-img",
        JSON.stringify({
          url,
          expire,
        })
      );
      baseURL = url;
      setBackground();
    } catch (e) {
      console.error(e);
    }
  };

  const setBackground = () => {
    $body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(${baseURL})`;
    $body.animate(
      [
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(255, 255, 255, 0.1)),url(${baseURL})`,
        },
      ],
      { delay: 3000, fill: "forwards" }
    );
  };

  if (localStorage.getItem("background-img")) {
    if (now > JSON.parse(localStorage.getItem("background-img")).expire) {
      loadBackground();
    } else {
      baseURL = JSON.parse(localStorage.getItem("background-img")).url;
      setBackground();
    }
  } else loadBackground();
```
1. 로컬 스토리지에서 키`background-img` 값이 존재하는지 확인 
2. 값이 존재하지 않거나 설정한 expire 날짜가 지났으면 새로운 이미지 데이터를 요청(getBackground) 후 해당 url로 배경 설정(setBackground)
3. 값이 존재하고 설정한 expire 날짜가 지나지 않았으면 해당 url로 배경 설정(setBackground)
<br/>

* 자바스크립트에서 애니메이션 적용

[animate](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)
```javascript
  $body.animate(
    [
      {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(255, 255, 255, 0.1)),url(${baseURL})`,
      },
    ],
    { delay: 3000, fill: "forwards" }
```
<br/>

* 장치의 위치 정보 받아오기

[getCurrentPosition](https://developer.mozilla.org/ko/docs/Web/API/Geolocation/getCurrentPosition)
```javascript
navigator.geolocation.getCurrentPosition(getSuccess, getError);
```
<br/>

* 중첩 템플릿 리터럴

[templete leterals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
```javascript
    const now = `${hour < 10 ? `0${hour}` : hour}:${
      minute < 10 ? `0${minute}` : minute
    }:${second < 10 ? `0${second}` : second}`;
```
