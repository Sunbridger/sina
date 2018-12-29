const ArrayUtil = {
  /**
   * 判断对象数组是否包含指定对象
   * 
   * @param {array} arr 对象数组
   * @param {object} obj 指定对象
   * @param {string} field 依据的字段名
   * @returns {boolean} 是否包含
   */
  include(arr, obj, field) {
    let isInclude = false;
    arr.forEach(item => {
      if (item[field] == obj[field]) {
        isInclude = true;
      }
    });
    return isInclude;
  },
  /**
   * 删除 数组中指定的值
   * 
   * @param {array} arr 对象数组
   * @param {string} val 要删除的值
   * @returns {array} 删除后的数组
   */
  remove (arr, val) {
    let index = this.indexOf(arr, val);
    if (index > -1) {
        arr.splice(index, 1);
    }
  },
  indexOf(arr, val) {
    let i = 0
    for (; i < arr.length; i++) {
        if (arr[i] == val) return i;
    }
    return -1;
  },
  
};

export default ArrayUtil;
