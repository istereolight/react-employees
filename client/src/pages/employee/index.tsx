import { useState } from "react";
import { Link, Navigate, useNavigation, useParams } from "react-router-dom"
import { 
  useGetEmployeeQuery, 
  useRemoveEmployeeMutation 
} from "../../app/services/employees";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { Descriptions, Divider, Modal, Space, message } from "antd";
import { Layout } from "../../components/layout";
import { CustomButton } from "../../components/custom-button";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ErrorMessage } from "../../components/error-message";


export const Employee = () => {
  const navigate = useNavigation();
  const [ error, setError] = useState('');
  const params = useParams<{id: string}>();
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const { data, isLoading} = useGetEmployeeQuery(params.id || '');
  const [ removeEmployee] = useRemoveEmployeeMutation();
  const user = useSelector(selectUser);

  if (isLoading) {
    return <span>Загрузка...</span>
  }

  if (!data) {
    return <Navigate to={'/'} />
  }
  
  return (
    <Layout>
      <Descriptions title='Информация о сотруднике' bordered>
        <Descriptions.Item label='Имя' span={ 3 }>
          { `${data.firstName} ${data.lastName }`}
        </Descriptions.Item>
        <Descriptions.Item label='Возраст' span={ 3 }>
          { data.age }
        </Descriptions.Item>
        <Descriptions.Item label='Адрес' span={ 3 }>
          { data.address }
        </Descriptions.Item>
      </Descriptions>
      {
        user?.id === data.userId && (
          <>
            <Divider orientation="left">Действия</Divider>
            <Space>
              <Link to={`/employee/edit/${data.id}`}>
                <CustomButton
                  shape="round"
                  type="default"
                  icon={ <EditOutlined />}
                >
                  Редактировать
                </CustomButton>
              </Link>
              <CustomButton
              shape="round"
              danger
              onClick={() => null}
              icon={<DeleteOutlined />}
              >
                Удалить
              </CustomButton>
            </Space>
          </>
        )
      }
      <ErrorMessage message={ error } />
      <Modal
        title='Подтвердите удаление'
        open={isModalOpen}
        onOk={ () => null }
        onCancel= { () => null}
        okText='Подтвердить' 
        cancelText='Отменить'
      >
        Вы действительно хотите удалить сотрудника из таблицы?
      </Modal>

    </Layout>
  )
}
