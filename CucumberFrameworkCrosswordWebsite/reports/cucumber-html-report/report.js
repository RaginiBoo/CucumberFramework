$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Crossword Website",
  "description": "",
  "id": "crossword-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Crossword_WebPage_RaginiBoobalan"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To check if the user is able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_with_ValidInvalid_details"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;1"
    },
    {
      "cells": [
        "raginiboobalan@gmail.com",
        "ragiboo@09"
      ],
      "line": 15,
      "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;2"
    },
    {
      "cells": [
        "chikum09@gmail.com",
        "chikum16"
      ],
      "line": 16,
      "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;3"
    },
    {
      "cells": [
        "Bro@gmail.com",
        "Bro123"
      ],
      "line": 17,
      "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "To check if the user is able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_with_ValidInvalid_details"
    },
    {
      "line": 1,
      "name": "@Crossword_WebPage_RaginiBoobalan"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "The user login using \"raginiboobalan@gmail.com\" and \"ragiboo@09\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 11650253500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 3200566800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "duration": 4666455600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "To check if the user is able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_with_ValidInvalid_details"
    },
    {
      "line": 1,
      "name": "@Crossword_WebPage_RaginiBoobalan"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "The user login using \"chikum09@gmail.com\" and \"chikum16\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 29491980800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.open_the_Crossword_Home_page()"
});
formatter.result({
  "duration": 14032063700,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IB96CGO\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49273}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 753a3948e3783b30d2c05710d23608ca\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.Crossword.Pages.RegisterLogin_Crossword_Page.HomePage(RegisterLogin_Crossword_Page.java:39)\r\n\tat com.Crossword.StepDefinition.RegisterLogin_Crossword_Step.open_the_Crossword_Home_page(RegisterLogin_Crossword_Step.java:24)\r\n\tat ✽.When Open the Crossword Home page(src/main/resources/feature/Testcase.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "To check if the user is able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-register-and-login-with-valid-\u0026-invalid-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_with_ValidInvalid_details"
    },
    {
      "line": 1,
      "name": "@Crossword_WebPage_RaginiBoobalan"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open the Crossword Home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "The user login using \"Bro@gmail.com\" and \"Bro123\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 15335828900,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IB96CGO\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00B50C83+1707139]\n\tOrdinal0 [0x00AB68F1+1075441]\n\tOrdinal0 [0x00A2DE72+515698]\n\tOrdinal0 [0x00A27CA8+490664]\n\tOrdinal0 [0x00A2839B+492443]\n\tOrdinal0 [0x00A292F5+496373]\n\tOrdinal0 [0x00A24F05+478981]\n\tOrdinal0 [0x00A2ECA0+519328]\n\tOrdinal0 [0x009DCA67+182887]\n\tOrdinal0 [0x009DBDDD+179677]\n\tOrdinal0 [0x009D9D4B+171339]\n\tOrdinal0 [0x009C1D4A+73034]\n\tOrdinal0 [0x009C2DC0+77248]\n\tOrdinal0 [0x009C2D59+77145]\n\tOrdinal0 [0x00ACBB67+1162087]\n\tGetHandleVerifier [0x00BEA966+508998]\n\tGetHandleVerifier [0x00BEA6A4+508292]\n\tGetHandleVerifier [0x00BFF7B7+594583]\n\tGetHandleVerifier [0x00BEB1D6+511158]\n\tOrdinal0 [0x00AC402C+1130540]\n\tOrdinal0 [0x00ACD4CB+1168587]\n\tOrdinal0 [0x00ACD633+1168947]\n\tOrdinal0 [0x00AE5B35+1268533]\n\tBaseThreadInitThunk [0x77956359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77B37B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x77B37B44+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.Crossword.Pages.RegisterLogin_Crossword_Page.LaunchBrowser(RegisterLogin_Crossword_Page.java:31)\r\n\tat com.Crossword.StepDefinition.RegisterLogin_Crossword_Step.the_User_launch_the_Chrome_application(RegisterLogin_Crossword_Step.java:18)\r\n\tat ✽.Given The User launch the Chrome application(src/main/resources/feature/Testcase.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.open_the_Crossword_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                formatter.result({
  "duration": 17506389100,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IB96CGO\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00B50C83+1707139]\n\tOrdinal0 [0x00AB68F1+1075441]\n\tOrdinal0 [0x00A2DE72+515698]\n\tOrdinal0 [0x00A27CA8+490664]\n\tOrdinal0 [0x00A2839B+492443]\n\tOrdinal0 [0x00A292F5+496373]\n\tOrdinal0 [0x00A24F05+478981]\n\tOrdinal0 [0x00A2ECA0+519328]\n\tOrdinal0 [0x009DCA67+182887]\n\tOrdinal0 [0x009DBDDD+179677]\n\tOrdinal0 [0x009D9D4B+171339]\n\tOrdinal0 [0x009C1D4A+73034]\n\tOrdinal0 [0x009C2DC0+77248]\n\tOrdinal0 [0x009C2D59+77145]\n\tOrdinal0 [0x00ACBB67+1162087]\n\tGetHandleVerifier [0x00BEA966+508998]\n\tGetHandleVerifier [0x00BEA6A4+508292]\n\tGetHandleVerifier [0x00BFF7B7+594583]\n\tGetHandleVerifier [0x00BEB1D6+511158]\n\tOrdinal0 [0x00AC402C+1130540]\n\tOrdinal0 [0x00ACD4CB+1168587]\n\tOrdinal0 [0x00ACD633+1168947]\n\tOrdinal0 [0x00AE5B35+1268533]\n\tBaseThreadInitThunk [0x77956359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77B37B74+228]\n\tRtlGetAppContainerNamedObjectPath [0x77B37B44+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.Crossword.Pages.RegisterLogin_Crossword_Page.LaunchBrowser(RegisterLogin_Crossword_Page.java:31)\r\n\tat com.Crossword.StepDefinition.RegisterLogin_Crossword_Step.the_User_launch_the_Chrome_application(RegisterLogin_Crossword_Step.java:18)\r\n\tat ✽.Given The User launch the Chrome application(src/main/resources/feature/Testcase.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.open_the_Crossword_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "RegisterLogin_Crossword_Step.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});