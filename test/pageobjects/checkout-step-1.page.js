class CheckoutStep1Page {
  get cancelButton() {
    return $('[data-test="cancel"]');
  }
}

export default new CheckoutStep1Page();
