function Page(page) {
	this.page = page.page;
	this.size = page.size;
	this.data = page.data;
	this.count = page.count;
	this.pageSize=page.pageSize;
	this.total=page.total;
};
// 页面对象，包含页面大小，数目等相关信息
module.exports = Page;
