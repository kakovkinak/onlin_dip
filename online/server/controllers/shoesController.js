const uuid = require('uuid')
const path = require('path');
const {Shoes, ShoesInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class ShoesController {
    async creat(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ShoesInfo.create({
                        title: i.title,
                        description: i.description,
                        shoesId: shoes.id
                    })
                )
            }

            const shoes = await Shoes.create({name, price, brandId, typeId, img: fileName})

            return res.json(shoes)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
            let shoes;
        if (!brandId && !typeId) {
            shoes = await Shoes.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            shoes = await Shoes.findAndCountAll({where:{brandId}, limit, offset})

        }
        if (!brandId && typeId) {
            shoes = await Shoes.findAndCountAll({where:{typeId}, limit, offset})

        }
        if (brandId && typeId) {
            shoes = await Shoes.findAndCountAll({where:{typeId, brandId}, limit, offset})

        }
        return res.json(shoes)
    }

    async getOne(req, res) {
        const {id} = req.params
        const shoes = await Shoes.findOne(
            {
                where: {id},
                include: [{model: ShoesInfo, as: 'info'}]
            },
        )
        return res.json(shoes)
    }


}

module.exports = new ShoesController()