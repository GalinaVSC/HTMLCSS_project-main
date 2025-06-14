var system = {
	
	type15: "Неизвестная команда. Обратитесь к справочной панели, чтобы просмотреть полный список команд",
	roomLock: "Вы не можете войти в эту комнату, так как ваш профиль не соответствует требованиям. Повторите попытку позже.",
	abuseMail: "Произошла ошибка, пожалуйста, свяжитесь с поддержкой сайта",
	ing1: "Пользователь уже в списке игнорируемых",
	ing2: "Пользователь добавлен в черный список",
	ing3: "Пользователь удалён из черного списка",
	friend1: "Запрос в друзья уже был отправлен",
	friend2: "Запрос в друзья отправлен",
	activeOk: "Повторная активация профиля была успешно отправлена по электронной почте:",
	activeBad: "Ваша учетная запись уже активирована, пожалуйста, обновите страницу",
	activeError: "Произошла ошибка при обработке вашего запроса. Пожалуйста, обновите эту страницу",
	log11: "Аккаунт уже существует с этой почтой",
	log9: "Не найдено участников с этой информацией",
	log10: "Этот временный ключ истек",
	invalidKey: "Неправильный временный пароль",
	errorName: "Название комнаты превышает предел в 30 символов",
	errorMain: "Вы не можете удалить главный зал",
	errorRoomexist: "Это имя комнаты уже существует",
	errorOccur: "Произошла ошибка",
	pass2: "Подтвердите старый пароль",
	pass3: "Пожалуйста, заполните все поля",
	pass4: "Новый пароль не соответствует",
	pass5: "Пароль слишком короткий",
	type1: "Вы пропустили по крайней мере 1 параметр",
	type2: "Это имя пользователя не существует",
	type3: "Вы не можете выполнить команду на указанного пользователя",
	type4: "Неправильная команда убедитесь что вы правильно ввели ее",
	type5: "Вы не можете удалить кляп данный другим администратором",
	type6:  "Успешно",
	type7: "Это действие уже установлено для этого пользователя",
	type8: "Пользователь ограничил или запретил отправку личных сообщений",
	type9: "Комната больше не существует",
	type10: "Действие уже установлено на этого пользователя",
	type11: "Действие отменено. Комната не найдена",
	type12: "Вы должны быть администратором, чтобы выполнить это действие",
	type13: "Успешно",
	type14: "Имя комнаты слишком длинное. Пожалуйста, введите до 14 символов",
	type17: "Плагин вы устанавливаете не в папке плагинов",
	type18: "Плагины успешно добавлен",
	type19: "Выбранный плагин уже установлен",
	type20: "Успешно обновлен.",
	type21: "Обновления отсутствует. Операция прервана",
	type22: "Чат находится в беззвучном режиме. Вы не можете говорить в данный момент",
	type23: "Бесшумный режим активирован",
	type24: "Бесшумный режим деактивирован",
	type25: "Команда прервана режим тишина уже активирована",
	type26: "Команда прервана режим молчания нужно быть активным, чтобы использовать эту команду",
	type27: "Указанный плагин не существует",
	type29: "Неудачно. Лимит на создание чата исчерпан или чат с таким именем уже существует? Имя чата должно содержать только латинские буквы и цифры. Пример: /create gorod812 ",
	type30: "Запрещённые символы!!! Имя должно состоять только из латинских символов и цифр. ",
	type31: "Неудачно. Повторите попытку через некоторое время.",
	type32: "Неудачно. Размер файла должен быть от 1 до 200кб, а изображение должно быть формата .jpg Пример: /screen https://sitename/picture.jpg Возможно у вас нет доступа.",
	type33: "Неудачно. Размер файла должен быть от 1 до 600кб, а изображение должно быть формата .jpg Пример: /background https://sitename/picture.jpg",
	type34: "!!! Доступ в чат закрыт НАВСЕГДА.",
	type35: "Фон успешно обновлён",
	type36: "Пользователь запрещает отправлять ему личные сообщения или добавил Вас в свой список игнора.. :-(",
	type37: "Загружено сообщений: ",
	type38: "Изменение данного параметра индексируемой комнаты ЗАПРЕЩЕНО! (если Вы всё же хотите его изменить, то вам необходимо обратиться к администратору ресурса) ",
	type39: "Потеряно интернет-соединение..",
	type40: "Доступ к комнате временно ограничен",
	type41: "Опрос ещё не создан",
	type42: "Выберите вариант из доступных",
	type43: "Вы уже проголосовали",
	type44: "Выберите вариант из доступных или проголосуйте за свой - пользователь за которого голосуют впервые должен находиться в комнате.",
	type45: "Пользователь запрещает отправлять ему личные сообщения.",
	type46: "Пользователь ограничил круг лиц кто ему может отправлять сообщения(список друзей)",
	type47: "Отправка ограничена списком игнора. ",
	type48: "Пользователь ограничил круг лиц кто ему может отправлять сообщения(список друзей и понравившиеся). <br> Чтобы написать участнику, в его профиле кликните <нравится>, и дождитесь ответной симпатии.",
	type49: "Неудачно. Проверьте отключены ли режимы Опрос и Референдум",
	type50: "Успешно! Для завершения регистрации необходимо перейти по ссылке в письме на вашем eMail",
	type51: "НЕВЕРНО!! Запрос должен иметь вид: /register eMail password Пример: /register user@mail.com 123456 <br> P.S. <br>Адрес электронной почты должен быть корректным (пример: user@mail.com), а также почтовый сервер должен быть из списка надежных, к примеру: mail.ru, gmail.com, yandex.ru и пр. Использование временной почты недопустимо. <br>Пароль должен быть не более 30 символов. <br>Помните, в случае ошибки допущенной вами в адрессе электронной почты - аккаунт будет потерян навсегда!",
	type52: "Чтобы сделать предложение, Ваш статус должен быть равен или выше статуса запрашиваемого участника. К примеру: user -> user - OK, user -> vip - NOOK, elite -> vip -> user - OK",
	type53: "Доступ к ЛС временно ограничен",
	type54: "Вы не можете выполнить команду на указанного пользователя или превысили лимит 10 для базовых или 20 для vip-room",
	type55: "Вы не можете развестись. Команда доступна только для VIP пользователей и выше.",
	type56: "Ваш баланс равен 0. Необходимо пополнить баланс для совершения данной команды.",
	inRoom: "Вы уже в этой комнате",
	roomPrison: "Переход между комнатами не возможен. Дождитесь окончания срока вашего наказания.",
	roomOpen: "Комната открыта. Повторите попытку входа.",
	support: "Successfully.",
	errsupport: "Unsuccessfully. Please try again later.",
	upload1: "Вы должны выбрать файл",
	upload2: "Ошибка при загрузке аватарки",
	upload3: "Неправильный тип файла",
	upload4: "Размер файла не должен превышать",
	upload6: "Файл слишком большой",
	upload7: "Жаль, вы достигли своего предела загрузок. Зайдите в загрузки и удалите ненужные картинки",
	upload8: "Этот файл уже существует",
	upload9: "Для пользователя уровня Гость доступна отправка фото только в личные сообщения (беседа) или в комнаты 18+",
	upload10: "Ваш доступ к функционалу комнаты ограничен. Отправка заблокирована.",
	upload11: "Неудачно. Загрузка аватара возможна не чаще чем 1 раз в час.",
	log1: "Пожалуйста, заполните все поля",
	log2: "Поле не может содержать только пробел",
	log3: "Неправильное ИМЯ или ПАРОЛЬ (проверьте раскладку и CAPS-lock. Если не получилось, нажмите - забыли пароль)",
	log4: "Имя ЗАНЯТО или содержит НЕДОПУСТИМЫЕ символы (имя должно содержать от 4-х до 16-ти символов).",
	log5: "Имя пользователя уже занято",
	loginvisible: "Смена ника возможна только в статусе онлайн и виден",
	logvippic: "Смена ника не возможна при авторском нике, обратитесь к администратору",
	log6: "Пожалуйста, введите корректный адрес электронной почты (пример: user@mail.com). || Почтовый сервер должен быть из списка надежных, к примеру: mail.ru, gmail.com, yandex.ru и пр. Использование временной почты недопустимо.",
	log7: "Имя пользователя должно быть более 4 символов",
	log8: "Пожалуйста, выберите другое имя",
	log12: "Unsuccessfully. Смена ника возможна не чаще чем раз в 7 дней или участник находится в offline. Повторите попытку позже.",
	log13: "Unsuccessfully. Смена ника возможна не чаще чем раз в 7 дней.  Повторите попытку позже.",
	log14: "Unsuccessfully. Смена ника возможна после удаления картинки ника.  Повторите попытку позже.",
	log101: "Вход без регистрации не доступен для вашего региона.",
	log102: "Превышено количество попыток ввода пароля. Пожалуйста, повторите позже.",
	log103: "Вход без регистрации временно недоступен. Пожалуйста, повторите попытку позже или авторизуйтесь после регистрации.",
	updateButton: "Настройки обновлены",
	updateInfo: "СОХРАНИТЬ",
	updateSuccess: "СОХРАНЕНИЕ НАСТРОЕК...",
	//infovip: "<b>Very Important Person</b> <br> <b>VIP</b> - статус учасника.<br><b>Привилегии VIP:</b><br><img data-fancybox='images' href='9.png' src='9.png' height='300px' width='100%'><br> Поддержи проект и стань нашим привилегированным пользователем. Для того, чтобы пожертвовать, отправьте запрос-команду в общий чат: /todonate",
	infovip: "<b>Very Important Person</b> <br> <b>VIP</b> - статус учасника чата, при котором участник обладает дополнительными привилегиями, такими как - смена ника, цвета ника, скрытие профиля, очистка ЛС и многое другое.. <br> Поддержи проект и стань нашим привилегированным пользователем! Пожертвование поможет оплатить улучшения в чате, которые принесут пользу всем! <br> Чтобы задать свой вопрос по VIP, а также сделать пожертвование, отправьте запрос-команду в общий чат: /todonate <br> PS: Все пожертвования являются окончательными. Из-за временного характера чата, мы не можем предложить возмещение.",
	infoapp: "Будь всегда мобилен! <br>Скачай android-приложение нашего чата! <br>Нажми чтобы скачать -> <a style='background-color: white; color: #4a76a8; padding: 3px 3px 3px;' href='https://нашчат.рф/chat.apk' target='_blank'><i class='fa fa-android'> </i> <i class='fa fa-download'> </i></a>",
	infoguest: "Вы вошли в чат как гость. <br>Ваш профиль будет работать только на одном устройстве. <br>При неактивности более 30-ти дней, гостевой профиль удаляется системой.",
	infodonate: "Здесь вы сможете отправить donate разработчику чата и помочь ему с развитием чата и мобильных приложений чата. <br>Ссылка на <a href='https://yoomoney.ru/to/4100118345172039' target='_blank' style='background-color: white; color: #4a76a8; padding: 3px 3px 3px;'> ЮМани </a> <br>Сделаем Наш Чат лучше вместе! <br>Спасибо за использование Нашего Чата!"
	
};
var system2 = {
	
	agreement: "Подтвердите условия пользовательского соглашения",
	selCountry: "Пожалуйста, выберите место"

};
var system3 = {
	errorSocial: "Ссылка не рабочая, проверьте правильность ссылки"
};

