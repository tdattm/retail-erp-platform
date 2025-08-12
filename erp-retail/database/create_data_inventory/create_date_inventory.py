import pymysql
import random
from faker import Faker
from snowflake import SnowflakeGenerator, Snowflake
from datetime import datetime

db_config = {
    "host": "localhost",
    "user": "root",
    "password": "123456",
    "database": "optima-project-retail-manager"
}
connect_mysql = pymysql.connect(**db_config)
cursor = connect_mysql.cursor()

fake = Faker('vi_VN')
sf = Snowflake.parse(856165981072306200, 1288834974657)
gen = SnowflakeGenerator.from_snowflake(sf)

user_id = [
    1450492617670998016,
    1450492617670998017,
    1450492617670998018,
    1450492617670998019,
    1450492617670998020
]

def get_id(table, cursor):
    sql = f"select id from {table}"
    cursor.execute(sql)
    rows = cursor.fetchall()
    return [row[0] for row in rows]
    
pro_id = get_id("product", cursor)
ware_id = get_id("warehouse", cursor)
bat_id = get_id("product_batch", cursor)

# Số lượng bản ghi inventory bạn muốn tạo
number_of_records = 5000

for _ in range(number_of_records):
    id = next(gen)
    # Chọn ngẫu nhiên ID từ danh sách
    warehouse_id = random.choice(ware_id)
    batch_id = random.choice(bat_id)
    product_id = random.choice(pro_id)

    quantity_available = random.randint(500, 10000)
    minimum_quantity = random.randint(100, 200)
    maximum_quantity = 10000
    status = 1
    create_by = random.choice(user_id)
    update_by = random.choice(user_id)
    create_at = fake.date_time_between(start_date="-2y", end_date="now").strftime("%Y-%m-%d %H:%M:%S")
    update_at = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    suggest_day_minimum_warehouse = None

    sql = """
    INSERT INTO inventory
    (id, warehouse_id, product_id, quantity_available, minimum_quantity, maximum_quantity, status,
    create_by, create_at, update_at, update_by, suggest_day_minimum_warehouse, batch_id)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """

    cursor.execute(sql, (id, warehouse_id, product_id, quantity_available, minimum_quantity, maximum_quantity, status,
    create_by, create_at, update_at, update_by, suggest_day_minimum_warehouse, batch_id))
    

connect_mysql.commit()
cursor.close()
connect_mysql.close()

print("Da insert data vào table inventory")