module.exports = {
    apiErrorHandler (err, req, res, next) {
      if (err instanceof Error) {
        // 預設為 500，意義為伺服器出錯 (Internal Server Error)
        res.status(err.status || 500).json({
          status: 'error',
          message: `${err.name}: ${err.message}`
        })
      } else {
        res.status(500).json({
          status: 'error',
          message: `${err}`
        })
      }
      next(err)
    }
  }
  