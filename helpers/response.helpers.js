class HelperResponse {
  static success(res, message = '', data = {}) {
    return res.status(200).json({
      ok: true,
      message,
      data
    });
  }

  static errorResponse(res, message = '', data = {}) {
    return res.status(400).json({
      ok: false,
      message,
      data
    });
  }
}
export default HelperResponse;
