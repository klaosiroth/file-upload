const path = require('path')
const { StatusCodes } = require('http-status-codes')

const uploadProductImage = async (req, res) => {
  console.log(req.files)
  let productImage = req.files.image
  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  )
  await productImage.mv(imagePath)
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } })
}

module.exports = {
  uploadProductImage,
}