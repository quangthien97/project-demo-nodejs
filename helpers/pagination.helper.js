class HelpsPagination {
  static getOffset(limit, page) {
    return !page ? 0 : --page * limit;
  }

  static convertToPositiveInt(limit, page, defaultLimit, defaultPage) {
    limit = !limit ? defaultLimit : (parseInt(limit) < 0 ? defaultLimit : parseInt(limit));
    page = !page ? defaultPage : (parseInt(page) < 0 ? defaultPage : parseInt(page));
    const offset = HelpsPagination.getOffset(limit, page);
    return { limit, page, offset };
  }

  static optionPagination(option, {getLimit, page}) {
    const { limit, offset} = HelpsPagination.convertToPositiveInt(getLimit, page, 2, 0);
    return {
      ...option,
      limit,
      offset
    };
  }
}

export default HelpsPagination;
