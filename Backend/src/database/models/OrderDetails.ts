import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "orderDetails",
  modelName: "OrderDetail",
  timestamps: true,
})
class OrderDetail extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4, // Generates a new UUID for each product
  })
  declare id: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare quantity: number;
}

export default OrderDetail;
