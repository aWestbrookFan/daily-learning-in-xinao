/*
 *  sww
 *  2021-12-13 17:12:55
 * */

const compListData = [
  {
    inputVal: {
      condition: 'input',
      formIndex: 0,
      formData: {
        selectComponent: 1639386085578,
        compWhichNeed: 3
      }
    },
    conditionVal: '<=',
    compareVal: {
      condition: 'compare',
      formIndex: 0,
      formData: {
        compareType: '4',
        data: {
          manualInputValue: '2'
        }
      }
    }
  }
]
const ccaFormData = {
  setState: '1',
  setCheck: 2,
  setValSelect: {
    valType: '',
    setValInput: ''
  }
}

// const result = compListData.map((item) => {
//     const actionRule = {
//         action: 'onClick', // 触发动作
//         rule: 'x < y', // 小于（比较规则）
//         referItem: 'formItemNameX', // 参考值，输入条件（表单内组件的字段名）
//         targetItem: 'formItemNameY', // 对比值，对比条件（表单内组件的字段名）,
//         actionStatus: 'disabled',// 待变更的状态
//         actionVal: '1111', // 触发后组件变更的值
//         actionVerifyStatus: 0 // 0 - 无， 1 - 必填 2 - 选填
//     }
//     actionRule.rule = `x ${item.conditionVal} y`
//     actionRule.referItem = _store.currentComponent.itemVal.name,
//     actionRule.targetItem = 'Fradio',
//     actionRule.actionStatus = 'disabled'
//     actionRule.actionVal = item.compareVal.data.manualInputValue,
//     actionRule.actionVerifyStatus = item.ccaFormData.setCheck
// })
