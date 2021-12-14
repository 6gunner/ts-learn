import express from 'express'
import { getManager } from 'typeorm';
import { WorkItem } from '../entity/workItem';

const router = express.Router();

router.get("/list", async (req, res, next) => {
  const workItemRepositry = getManager().getRepository(WorkItem);
  try {
    const workItems = await workItemRepositry.find({
      order: {
        createdAt: "DESC"
      }
    })
    res.json(workItems);
  } catch (err) {
    next(err);
  }
})

router.get("/get", async (req, res, next) => {
  const workItemRepositry = getManager().getRepository(WorkItem);
  try {
    const id = req.query.id;
    console.log(`id = ${id}`)
    const entity = await workItemRepositry.findOne(id);
    if (entity) {
      res.json(entity);
    } else {
      res.json({});
    }
  } catch (err) {
    next(err);
  }
})

router.post('/add', async (req, res, next) => {
  // 保存
  const workItemRepositry = getManager().getRepository(WorkItem);
  const item = new WorkItem();
  item.text = req.body.text;
  item.isChecked = false;
  item.createdAt = new Date();
  item.updatedAt = new Date();
  try {
    const result = await workItemRepositry.save(item);
    res.json({ data: result })
  } catch (err) {
    // todo ,添加log
    next(err);
  }
})

router.put("/update/:id", async (req, res, next) => {
  const body = req.body;
  const workItemRepositry = getManager().getRepository(WorkItem);
  try {
    const entity = await workItemRepositry.findOne(req.params.id);
    if (entity) {
      entity.text = body.text;
      entity.isChecked = body.isChecked;
      const result = await workItemRepositry.save(entity);
      res.json({ data: result })
    }
  } catch (err) {
    // todo ,添加log
    next(err);
  }

})

router.delete('/delete/:id', async (req, res, next) => {
  const workItemRepositry = getManager().getRepository(WorkItem);
  try {
    const result = await workItemRepositry.delete(req.params.id);
    res.json({ data: result })
  } catch (err) {
    // todo ,添加log
    next(err);
  }
})


export default router;