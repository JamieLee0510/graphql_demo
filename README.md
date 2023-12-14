# 此為測試 GraphQL 的前後端流程

## 結論

GraphQL 跟 Restful api 的差異，GPT 是說：

-   精確的數據獲取
-   單一 end point
-   強類型系統

### 精確的數據獲取

我覺得這個是對於前端而言。在之前的 Restful api，除非用 Typescript 強定義 res 的類型，不然不會知道某支 API 是要回傳什麼; 而 GraphQL 是前後端都要定義好接口，所以前端可以直接從`gql`語句中知道資料結構

### 單一 end point

這個也蠻好理解的，後端就是以`graphql handler`來接收從一個 route 的資料，然後所有的資料請求就從該 hander 中分發。

### 強類型系統

也是蠻好理解的，因為 graphql 都要定義好資料類型，類型錯誤就會報錯。

## 後端

### 簡單筆記

主要是定義`schema`、`field`等，然後構建`resolver`來跟 db 交互之類的，`type`就是定義這個 field 的資料結構。

然後就是，`express-graphql`以及不再維護，NodeJS 的 web server 框架都可以用`graphql-http`

### resolver 的入参

一共有 `parent`, `args`, `context`, `info`四個。

-   parent

它是上一個 resolver 的返回值，而對於頂層查詢、parent 為 undefined。所以 resolver 可能會在 graphql type 中嵌套使用。

-   args

來自請求的參數

-   context

可以包含重要資訊（user、token 等），但目前不太懂

-   info
    用於 log 和性能觀測的參數，平常業務邏輯應該用不到

## 前端

主要就是初始化一個 graphql client 實例，然後要知道在 schema 中定義了什麼 field、知道什麼資料要去哪裡找；再來就是寫`gql`

# ChangeLog

-   20231214 -- MVP 大致跑通
