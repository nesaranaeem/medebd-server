const rateLimit = require("express-rate-limit");

const whiteListedDomain = (req, res, next) => {
  const apiKey = req.query.apikey;

  // Check if the request origin matches one of the allowed domains
  const allowedDomains = [
    "https://medebd.com",
    "https://medebd-client-nextjs.netlify.app",
    "http://localhost:3000",
  ];
  if (allowedDomains.includes(req.headers.origin)) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  } else {
    // Check if the request includes a valid api key from the environment
    if (apiKey === process.env.API_KEY) {
      // If the API_KEY is valid, proceed without rate limiting
      next();
    } else if (apiKey === undefined) {
      // If the request does not include an API key, use demoRateLimiter middleware
      demoRateLimiter(req, res, (err) => {
        if (err) {
          // Rate limit exceeded for requests without a valid API key
          return res.status(429).json({
            message: "🚧 Whoa! Too many requests! Slow down, brave soul! 🐢",
          });
        }
        // Request without API key passes, proceed without rate limiting
        next();
      });
    } else {
      // If the API_KEY is invalid, show a message
      res.status(403).json({
        message: "🤔 Oops! Wrong API key! 🔒",
      });
    }
  }
};

const demoRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 3, // Max 3 requests per minute
  message: {
    message:
      "Assalamualaikum Boro Bhai! Too many requests! 🚧 Slow down! 🐢. Max 3 requests per minute",
  },
});

module.exports = whiteListedDomain;
