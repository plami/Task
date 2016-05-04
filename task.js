/**
 * Created by macbook on 5/3/16.
 */

var myJSONObject = {
    "_id": "E241AD11-1557-4FD3-B21F-97D0FA4230C7",
    "_rev": "13-2c82a95b6558a4c6144b58f59720edc7",
    "fp_type": "ibeacon",
    "fp_owner": "global",
    "fp_ext_id": "bstg_autogen_1445345099899_62005859",
    "uuid": "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
    "major": 37100,
    "minor": 51516,
    "label": "Icy Bond",
    "actions": [
        {
            "type": "home-block",
            "params": {
                "appearance": "text",
                "action": null
            }
        },
        {
            "type": "presence",
            "params": {
                "interval": 15
            }
        },
        //for Testing
        // {
        //     "type": "presence",
        //     "params": {
        //         "interval": 13
        //     }
        // },
        {
            "type": "notification",
            "params": {
                "title": "text",
                "message": "message"
            }
        }
    ],
    "fp_last_changes": {
        "timestamp": 1445437699,
        "source": "dataloader_api",
        "host": "localhost.backstage.4pax.com"
    },
    "location": {
        "lat": -4.232423,
        "lng": 12.523098
    }
};

//Extract action types in array

var arrActions = [];

arrActions = _.pluck(myJSONObject.actions, "type");
document.writeln("</br>" + "The action types are: " + arrActions + "<p></p>");

//Convert actions array into a object where the key is the actions' type and the value are its params
// var actions = [];
//
// actions.push(JSON.stringify(myJSONObject.actions[0].params));
// actions.push(JSON.stringify(myJSONObject.actions[1].params));
// actions.push(JSON.stringify(myJSONObject.actions[2].params));
// document.writeln(actions);

var result = _.reduce(myJSONObject.actions, function(result, item){
    result[item.type] = JSON.stringify(item.params);
    return result;
},{});
document.writeln("Convert actions array into a object where the key is the actions' type " +
    "and the value are its params: " + "</br>" + JSON.stringify(result) + "<p></p>");

// Questions
// In the above task, what would happen if there were two actions of a same type?
// In the result will stay the action, which is declared last. It will ovewrite the one before it.
