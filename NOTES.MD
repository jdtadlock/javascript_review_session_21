modify state in component based on response from multiple API requests
  - On load of component
  - secure API domain
    • Express blocks other domains by default
      - myrandomsite.com --> request to oursite.com --> CORS Error(Cross Origin Resource Sharing)
Authentication
  - oAuth(Facebook, Google)
    • Logging in through another service and using that user information in your
      own application



Passport
  - Middleware authentication package that handles the request and session storage
    for storing/retaining user information 
  - oAuth through many different platforms - Google, Github, Youtube, etc.