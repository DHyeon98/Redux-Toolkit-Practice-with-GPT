import { useController, useForm } from "react-hook-form";

export default function RHFuseController() {
  const { control, handleSubmit } = useForm();
  const {
    field: { value, onChange },
  } = useController({
    name: "test",
    control,
    defaultValue: "",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input value={value} type="text" onChange={onChange} />
      <button type="submit">제출</button>
    </form>
  );
}

// useController는 React Hook Form에서 개별 입력 요소의 상태와 유효성 검사를 직접 제어하고 관리할 수 있도록 제공하는 훅입니다.
// Controller 컴포넌트 대신 사용할 수 있으며, 더 세밀한 제어가 필요할 때 유용합니다.

// useController의 반환값
// useController 훅은 field, fieldState, formState라는 객체를 반환하며, 각 객체의 기능은 아래와 같습니다.

// field:

// field 객체는 입력 요소와 연동할 수 있는 여러 가지 프로퍼티와 이벤트 핸들러를 포함하고 있습니다.
// 주요 프로퍼티:
// onChange: 입력값이 변경될 때 호출되는 이벤트 핸들러입니다.
// onBlur: 입력 필드가 포커스를 잃을 때 호출되는 이벤트 핸들러입니다.
// value: 현재 입력값을 나타냅니다. 폼의 상태와 동기화되어 자동으로 업데이트됩니다.
// ref: 해당 입력 요소의 참조입니다. React Hook Form에서 내부적으로 접근할 수 있도록 도와줍니다.
// fieldState:

// fieldState는 개별 필드의 상태를 나타내는 객체입니다.
// 주요 프로퍼티:
// error: 유효성 검사에 실패한 경우 오류 메시지가 포함됩니다.
// isTouched: 해당 필드가 사용자가 상호작용한 적이 있는지 나타내는 플래그입니다.
// isDirty: 필드의 값이 변경되었는지 여부를 나타냅니다.
// invalid: 필드가 유효하지 않을 때 true가 됩니다.
// formState:

// formState는 폼의 전체 상태를 나타내며, useForm 훅에서 이미 제공된 상태와 동일한 객체입니다.
// 주요 프로퍼티:
// isSubmitted: 폼이 제출된 적이 있는지 나타냅니다.
// isSubmitting: 폼이 현재 제출 중인 상태인지 나타냅니다.
// isSubmitSuccessful: 폼이 성공적으로 제출되었는지 나타냅니다.
// isDirty: 폼 내 하나 이상의 필드가 변경된 적이 있는지 여부를 나타냅니다.
