const a = async () => {
  try {
    return c;
  } catch (e) {
    console.log('1', e);
    return Promise.reject(123);
  }
};

const b = async () => {
  try {
    const value = await a().catch(() => 1111);
    console.log(value);
  } catch (e) {
    console.log('b1', e);
  }
};

b();
