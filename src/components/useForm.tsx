import { useForm } from "react-hook-form";

export default function RHFuseForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data: any) => {
    // 출력 값
    // {
    //   name: {
    //     firstName: [
    //       { title: "value" }
    //     ]
    //   }
    // }

    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name.firstName.0.title", { required: "내용 입력" })}
      />

      {/* <input
        {...register("numberInput", {
          required: "내용 입력",
          // true로 설정하면 숫자로 변환하여 출력. 만약 문자를 입력하면 NaN으로 출력
          valueAsNumber: true,
        })}
      /> */}
      {/* {errors.name.firstName.0?.message} */}
      <button type="submit">제출</button>
    </form>
  );
}

// register 입력 필드를 등록하고 유효성 검사 규칙을 적용하는 데 사용
// 이 메서드를 호출하면 특정 입력 필드에 대한 이벤트 핸들러(onChange, onBlur)와 name, ref 속성 등을 얻을 수 있다.
// required: true로 설정 시 필수 입력 필드로 지정됩니다. 문자열을 추가해 오류 메시지를 설정할 수도 있습니다.
// maxLength 및 minLength: 입력 값의 최대 및 최소 길이를 설정합니다.
// max 및 min: 숫자 입력 필드의 최대 및 최소 값을 설정합니다.
// pattern: 정규 표현식 패턴을 지정하여 해당 패턴에 맞는 입력만 허용할 수 있습니다.
// validate: 사용자 정의 유효성 검사 함수를 정의할 수 있으며, 다양한 검사를 설정할 수 있습니다.
// valueAsNumber: true로 설정 시 숫자로 변환되어 저장됩니다.
// valueAsDate: true로 설정 시 날짜 객체로 변환되어 저장됩니다.
// setValueAs: 변환 함수로, 입력 값을 변환한 후 저장합니다.
// disabled: true로 설정 시 필드가 비활성화되며 값은 undefined로 저장됩니다.
// onChange 및 onBlur: 각 이벤트에 대한 커스텀 핸들러를 설정할 수 있습니다.
// value: 필드의 초기값을 설정합니다.
// shouldUnregister: true로 설정 시 컴포넌트가 언마운트될 때 필드가 폼에서 제거됩니다.

// name마다 .을 쓰면 객체로 생성
// Input Name	Submit Result
// register("firstName")	{firstName: 'value'}
// register("name.firstName")	{name: { firstName: 'value' }}
// register("name.firstName.0")	{name: { firstName: [ 'value' ] }}

// useForm
// mode: 유효성 검사 방식 설정 (onSubmit, onChange, onBlur, onTouched).
// reValidateMode: 오류 발생 후 재검사 방식 설정 (onChange, onBlur, onSubmit).
// defaultValues: 폼의 기본값 설정, 동기 및 비동기 지원.
// values: 외부 상태나 서버 데이터로 폼 값을 업데이트할 때 사용.
// errors: 서버에서 반환된 오류를 폼 오류 상태에 반영.
// resetOptions: values나 defaultValues 업데이트 시의 폼 리셋 동작을 설정.
// criteriaMode: 모든 오류를 수집할지 (all) 첫 오류만 수집할지 (firstError) 설정.
// shouldFocusError: 폼 제출 시 오류가 있을 때 포커스를 첫 오류 필드에 자동 설정할지 여부.

// formState 주요 속성
// isDirty: 사용자가 입력값을 변경하면 true가 됩니다.
// dirtyFields: 사용자가 수정한 필드를 나타내는 객체입니다.
// touchedFields: 사용자가 상호작용한 필드를 저장하는 객체입니다.
// defaultValues: useForm에서 설정된 폼의 기본값.
// isSubmitted: 폼이 제출된 적이 있으면 true.
// isSubmitSuccessful: 폼이 오류 없이 제출되었을 경우 true.
// isSubmitting: 폼이 현재 제출 중일 때 true.
// isLoading: 비동기 기본값이 로드되는 동안 true.
// submitCount: 폼이 제출된 횟수를 추적.
// isValid: 모든 필드가 유효할 경우 true.
// isValidating: 유효성 검사가 진행 중일 때 true.
// validatingFields: 비동기 유효성 검사를 수행 중인 필드를 캡처.
// errors: 유효성 검사 오류가 있는 필드의 메시지를 포함하는 객체.
// disabled: disabled 속성이 true인 경우 폼이 비활성화.
