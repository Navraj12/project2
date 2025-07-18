import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "blogs",
  modelName: "Blog",
})
class Blog extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
  })
  declare id: string;
  @Column({
    type: DataType.STRING,
  })
  declare title: string;
  @Column({
    type: DataType.STRING,
  })
  declare title2: string;
}

export default Blog;
