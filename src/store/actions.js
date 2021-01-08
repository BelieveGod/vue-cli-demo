/**
 * 这段代码虽然是示范使用action 的异步功能，但其中的 async/await,   setTimout, Promise ， 匿名函数的用法都很有代表性，而且不熟悉语法会很难读懂
 * @type {{changeNameDelay(*=, *=): Promise<void>}}
 */

const actions={
  async changeNameDelay(context,payload){
    await (()=>new Promise((resolve, reject)=>{
      setTimeout(context.commit, 1000, 'changeName', payload);
      setTimeout(resolve, 1000, {mutationName:'changeName', payload});
    }))().then(({mutationName,payload})=>{
      context.commit(mutationName,payload)
    });
    console.log("异步延迟修改名字成功");
  }
}

export default actions;
