myApp.controller('Input', ['$scope', '$location', 'UserFactory', function($scope, $location, UserFactory) {
    console.log('Input controller!');

    $scope.userFactory = UserFactory;
    $scope.character = {};
    //$scope.skills = [];


    $scope.saveChar = function(){
        character = {
            source: "custom",
            name: $scope.charName,
            metatype: $scope.charMetatype,
            body: $scope.charBody,
            agility: $scope.charAgility,
            reaction: $scope.charReaction,
            strength: $scope.charStrength,
            willpower: $scope.charWillpower,
            logic: $scope.charLogic,
            intuition: $scope.charIntuition,
            charisma: $scope.charCharisma,
            edge: $scope.charEdge,
            magic_resonance: $scope.charMagicOrResonance,
            essence: $scope.charEssence,
            initiative: $scope.charInitiative,
            matrix_initiative: $scope.charMatrixInitiative,
            astral_initiative: $scope.charAstralInitiative,
            composure: $scope.charComposure,
            judge_intent: $scope.charJudgeIntent,
            memory: $scope.charMemory,
            lift_carry: $scope.charLiftCarry,
            movement: $scope.charMovement,
            physical_limit: $scope.charPhysicalLimit,
            mental_limit: $scope.charMentalLimit,
            social_limit: $scope.charSocialLimit,
            physical_track: $scope.charPhysicalTrack,
            stun_track: $scope.charStunTrack,
            armor: $scope.charArmor,
            character_notes: $scope.charNotes
            //skills: $scope.skills,

        }
        $scope.userFactory.factorySaveNpc(character);
        $scope.trackerView();
    }

    $scope.trackerView = function(){
        $location.path('tracker');
    }
}]);