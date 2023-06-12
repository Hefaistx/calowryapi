"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbConnection_1 = __importDefault(require("../../config/dbConnection"));
const SubMenu_1 = __importDefault(require("./SubMenu"));
class MasterMenu extends sequelize_1.Model {
}
MasterMenu.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.BIGINT
    },
    name: {
        allowNull: true,
        type: sequelize_1.DataTypes.STRING
    },
    icon: {
        allowNull: true,
        type: sequelize_1.DataTypes.TEXT
    },
    ordering: {
        allowNull: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    active: {
        allowNull: true,
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    timestamps: true,
    sequelize: dbConnection_1.default,
    underscored: false
});
MasterMenu.hasMany(SubMenu_1.default);
exports.default = MasterMenu;
