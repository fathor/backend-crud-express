import users from "../models/UsersModel.js"

export const getUsers = async (req, res) => {
    try {
        const response = await users.findAll()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await users.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
        await users.create(req.body)
        res.status(201).json({ msg: "User Created" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const updateUser = async (req, res) => {
    try {
        await users.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json({ msg: "User Updated" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const deleteUser = async (req, res) => {
    try {
        await users.destroy({
            where: { id: req.params.id }
        })
        res.status(201).json({ msg: "User Deleted" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
