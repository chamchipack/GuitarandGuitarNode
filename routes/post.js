const express = require('express')
const router = express.Router()
const {userData,alldatasearch,onedatasearch,daydatasearch,dataDelete,dataModify,namedatasearch,userMemo} = require('../controllers/post')
const authMiddleware = require('../middleware/authMiddleware')
require("dotenv").config()

//유저 데이터 생성하는 API
router.post('/userData', authMiddleware, userData)

//유저 데이터 가져오기(전체) API
router.get('/alldataserch', authMiddleware, alldatasearch)

//유저 데이터 가져오기(한개) API
router.get('/onedataserch', authMiddleware, onedatasearch)

//유저 이름검색 가져오기(한개) API
router.get('/namedataserch', authMiddleware, namedatasearch)

//유저 데이터 가져오기(요일만) API
router.get('/daydataserch', authMiddleware, daydatasearch)

//유저 데이터 삭제하기 API
router.delete('/dataDelete', authMiddleware, dataDelete)

//유저 데이터 수정하기 API
router.put('/dataModify', authMiddleware, dataModify)

//유저 메모(특이사항) 입력하기
router.post('/userMemo', authMiddleware, userMemo)

module.exports = router
