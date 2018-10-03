class LocalStorage {
  constructor() {
    this.prefix = 'warsawjs25-';

    if (typeof window !== 'undefined') {
      this.type = 'localStorage';
      try {
        this.test();
      } catch (err) {
        this.type = 'sessionStorage';
        try {
          this.test();
        } catch (err) {
          console.error('Your web browser is outdated. Some features may not work properly for you.');
          throw err;
        }
      }
    }
  }

  test() {
    const key = this.prefix + 'storage-test';
    this.setItem(key, 'test');
    this.removeItem(key);
  }

  setItem(key, value) {
    if (this.type) {
      window[this.type].setItem(key, value);
    }
  }

  getItem(key) {
    if (this.type) {
      return window[this.type].getItem(key);
    }
  }

  removeItem(key) {
    if (this.type) {
      window[this.type].removeItem(key);
    }
  }

  clear() {
    if (this.type) {
      window[this.type].clear();
    }
  }

  save(key, data) {
    data = JSON.stringify(data);
    this.setItem(this.prefix + key, data);
  }

  get(key) {
    const item = this.getItem(this.prefix + key);
    if (!item) return;

    let data = {};
    try {
      data = JSON.parse(item);
    } catch (e) {
      console.error(e);
    }

    return data;
  }

  remove(key) {
    this.removeItem(this.prefix + key);
  }
}

export default new LocalStorage();
