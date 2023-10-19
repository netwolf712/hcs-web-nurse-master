import { getRouters } from "@/api/menu";
import { getMaintainRouters } from "@maintainModule/api/menu";
import {
  getBaseSettings,
  getBedSettings,
  getRoomSettings,
  getSeniorSettings,
} from "@masterModule/api/menu";
// 生成路由
export function generateModuleRoutes() {
  const baseRouter = getRouters();
  //将基础设置模块的数据插入其中
  addMenu(getBaseSettings(), baseRouter);
  //将维护子模块的数据插入其中
  addMenu(getMaintainRouters(), baseRouter);
  //将分机管理模块插入其中
  addMenu(getBedSettings(), baseRouter);
  //将病房门口屏管理模块插入其中
  addMenu(getRoomSettings(), baseRouter);
  //将高级设置模块插入其中
  addMenu(getSeniorSettings(), baseRouter);
  return baseRouter;
}

function addMenu(srcRouter, dstRouter) {
  srcRouter.sidebarRoutes.forEach((element) => {
    dstRouter.sidebarRoutes.push(element);
  });

  srcRouter.rewriteRoutes.forEach((element) => {
    dstRouter.rewriteRoutes.push(element);
  });
}
