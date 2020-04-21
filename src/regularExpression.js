/**
 *  正则表达式集合
*/
// 仅支持中文、英文、数字、下划线、中划线
export const namePattern = /^[\u4E00-\u9FA5A-Za-z0-9_-]+$/;
// 仅支持英文、数字、下划线、中划线
export const AccountNumber = /^[A-Za-z0-9_-]+$/;

// 身份证号
export  const IdentityNumber = /^[1-9]\d{5}((((19|[2-9][0-9])\d{2})(0?[13578]|1[02])(0?[1-9]|[12][0-9]|3[01]))|(((19|[2-9][0-9])\d{2})(0?[13456789]|1[012])(0?[1-9]|[12][0-9]|30))|(((19|[2-9][0-9])\d{2})0?2(0?[1-9]|1[0-9]|2[0-8]))|(((1[6-9]|[2-9][0-9])(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))0?229))\d{3}[0-9X]$/;
// 手机号码及带区号的座机号
export  const teleAndPhoneNumber = /^([1][3,4,5,6,7,8,9])\d{9}|(\d{3,4}-\d{7,8})$/;